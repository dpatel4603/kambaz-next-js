export default async function Zoom({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  
  return (
    <div id="wd-zoom">
      <h1>Zoom</h1>
      <p>Zoom meetings for course {cid}</p>
      <p>Access your course Zoom meetings and recordings here.</p>
    </div>
  );
}
