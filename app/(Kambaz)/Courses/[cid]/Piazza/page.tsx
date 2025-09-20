export default async function Piazza({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  
  return (
    <div id="wd-piazza">
      <h1>Piazza</h1>
      <p>Piazza discussion board for course {cid}</p>
      <p>This is where students can ask questions and participate in course discussions.</p>
    </div>
  );
}
