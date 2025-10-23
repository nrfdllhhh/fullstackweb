<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\Book;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class TransactionController extends Controller
{

    public function index()
    {
        $transactions = Transaction::with(['customer', 'book'])->get();
        return response()->json($transactions);
    }


    public function store(Request $request)
    {
        $user = JWTAuth::parseToken()->authenticate();

        if ($user->role !== 'user') {
            return response()->json(['message' => 'Only customers can create transactions'], 403);
        }

        $request->validate([
            'book_id' => 'required|exists:books,id',
            'total_amount' => 'required|numeric|min:0',
        ]);

        $orderNumber = 'ORD-' . str_pad(rand(1, 9999), 4, '0', STR_PAD_LEFT);

        $transaction = Transaction::create([
            'order_number' => $orderNumber,
            'customer_id' => $user->id,
            'book_id' => $request->book_id,
            'total_amount' => $request->total_amount,
        ]);

        return response()->json([
            'message' => 'Transaction created successfully',
            'data' => $transaction->load(['book', 'customer'])
        ]);
    }


    public function show($id)
    {
        $user = JWTAuth::parseToken()->authenticate();
        $transaction = Transaction::with(['book', 'customer'])->find($id);

        if (!$transaction) {
            return response()->json(['message' => 'Transaction not found'], 404);
        }

        if ($user->role !== 'admin' && $transaction->customer_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized access'], 403);
        }

        return response()->json($transaction);
    }


    public function update(Request $request, $id)
    {
        $user = JWTAuth::parseToken()->authenticate();
        $transaction = Transaction::find($id);

        if (!$transaction) {
            return response()->json(['message' => 'Transaction not found'], 404);
        }

        if ($transaction->customer_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized access'], 403);
        }

        $request->validate([
            'total_amount' => 'required|numeric|min:0',
        ]);

        $transaction->update([
            'total_amount' => $request->total_amount,
        ]);

        return response()->json(['message' => 'Transaction updated', 'data' => $transaction]);
    }


    public function destroy($id)
    {
        $transaction = Transaction::find($id);

        if (!$transaction) {
            return response()->json(['message' => 'Transaction not found'], 404);
        }

        $transaction->delete();

        return response()->json(['message' => 'Transaction deleted successfully']);
    }
}
