'use client'
import Link from "next/link";
import { useRouter } from "next/router";

export function NavicationBar() {

    return (
        <>
            <center>
                <Link className="btn btn-primary mx-2 mt-2" href="/">หน้าแรก</Link>
                <Link className="btn btn-primary mx-2 mt-2" href="/about">เกี่ยวกับ</Link>
                <Link className="btn btn-primary mx-2 mt-2" href="/service">บริการ</Link>
                <Link className="btn btn-primary mx-2 mt-2" href="/contact">ติดต่อ</Link>
            </center>
        </>
    )
}