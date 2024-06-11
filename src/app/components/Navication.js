import Link from "next/link";

export default function NavicationBar() {
    return (
        <center>
            <Link className="btn btn-primary mx-2 my-3" href="/">หน้าแรก</Link>
            <Link className="btn btn-secondary mx-2 my-3" href="/about">เกี่ยวกับเรา</Link>
            <Link className="btn btn-success mx-2 my-3" href="/service">บริการของเรา</Link>
            <Link className="btn btn-danger mx-2 my-3" href="/contact">ติดต่อเรา</Link>
        </center>
    )
}