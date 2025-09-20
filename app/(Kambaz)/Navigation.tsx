import Link from "next/link";

export default function MainNavigation() {
  return (
    <div id="wd-main-navigation">
      <ul>
        <li>
          <Link href="https://www.northeastern.edu" target="_blank">
            NEU
          </Link>
        </li>
        <li>
          <Link href="/Account">
            Account
          </Link>
        </li>
        <li>
          <Link href="/Dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/Dashboard">
            Course
          </Link>
        </li>
        <li>
          <Link href="/Calendar">
            Calendar
          </Link>
        </li>
        <li>
          <Link href="/Inbox">
            Inbox
          </Link>
        </li>
        <li>
          <Link href="/Labs">
            Labs
          </Link>
        </li>
      </ul>
    </div>
  );
}