export default async function Quizzes({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  
  return (
    <div id="wd-quizzes">
      <h1>Quizzes</h1>
      <p>Quizzes for course {cid}</p>
      <p>Take quizzes and view quiz results here.</p>
    </div>
  );
}
