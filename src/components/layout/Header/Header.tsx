import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import "./Header.scss";
import Logout from "./Logout";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "default" | "primary" | "transparent";
}

const Header: React.FC<HeaderProps> = async ({ type = "default" }) => {
  const session = await auth();
  console.log(session);
  const user = !!session?.user;
  console.log(user);

  return (
    <header className={`header ${type}Type`}>
      <div className="layout header-contents">
        <div className="header-logo">
          <Link href="/">
            <div className="img-box">
              <Image
                src={`/img/logo-${type}.svg`}
                alt="TriFly"
                width={0}
                height={0}
                sizes="100%"
              />
            </div>
            <h1 className="hidden">TriFly</h1>
          </Link>
        </div>

        <nav className="header-nav">
          <Link href="/reservation">예약내역</Link>
          <Link href="/footprint">발자국</Link>
        </nav>

        <div className="header-user">
          {user ? (
            <Logout type={type} />
          ) : (
            <Link href="/login">
              <div className="img-box">
                <Image
                  src={`/img/icon-login-${type === "default" ? "black" : "white"}.svg`}
                  alt="로그인"
                  width={0}
                  height={0}
                  sizes="100%"
                />
              </div>
              <span className="hidden">로그인</span>
            </Link>
          )}
        </div>

        <div className="corner">
          <div className="left" />
          <div className="right" />
        </div>
      </div>
    </header>
  );
};

export default Header;
