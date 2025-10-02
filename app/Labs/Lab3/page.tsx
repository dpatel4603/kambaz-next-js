import Link from "next/link";

export default function Lab3() {
  return (
    <div>
      <div className="mb-3">
        <Link href="/Labs" className="btn btn-outline-primary">
          ← Back to Lab Exercises
        </Link>
      </div>
      <h2>Lab 3</h2>
      <h3>JavaScript Fundamentals</h3>
      <p>This lab will cover JavaScript fundamentals and interactive features.</p>
    </div>
  );
}
