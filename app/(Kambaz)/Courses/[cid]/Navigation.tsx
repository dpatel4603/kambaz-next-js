import Link from "next/link";

export default function CourseNavigation({ cid }: { cid: string }) {
  return (
    <div id="wd-course-navigation">
      <ul>
        <li>
          <Link href={`/Courses/${cid}/Home`}>
            Home
          </Link>
        </li>
        <li>
          <Link href={`/Courses/${cid}/Modules`}>
            Modules
          </Link>
        </li>
        <li>
          <Link href={`/Courses/${cid}/Piazza`}>
            Piazza
          </Link>
        </li>
        <li>
          <Link href={`/Courses/${cid}/Zoom`}>
            Zoom
          </Link>
        </li>
        <li>
          <Link href={`/Courses/${cid}/Quizzes`}>
            Quizzes
          </Link>
        </li>
        <li>
          <Link href={`/Courses/${cid}/Assignments`}>
            Assignments
          </Link>
        </li>
        <li>
          <Link href={`/Courses/${cid}/Grades`}>
            Grades
          </Link>
        </li>
      </ul>
    </div>
  );
}