export default function Team() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Team</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          <img src="/2.png" className="rounded-circle mb-3 img-fluid" alt="Member 1" />
          <h5>Nur Fadilah</h5>
          <p>Frontend Developer</p>
        </div>
        <div className="col-md-4 text-center">
          <img src="/3.png" className="rounded-circle mb-3 img-fluid" alt="Member 2" />
          <h5>Teammate</h5>
          <p>Backend Developer</p>
        </div>
        <div className="col-md-4 text-center">
          <img src="/BANGBOOTSS1_.png" className="rounded-circle mb-3 img-fluid" alt="Member 3" />
          <h5>Teammate</h5>
          <p>UI/UX Designer</p>
        </div>
      </div>
    </div>
  );
}
