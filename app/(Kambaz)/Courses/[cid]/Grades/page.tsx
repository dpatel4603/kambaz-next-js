export default async function Grades({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  
  return (
    <div id="wd-grades">
      <h1>Grades</h1>
      <p>Grades for course {cid}</p>
      <p>View your grades and gradebook here.</p>
    </div>
  );
}
