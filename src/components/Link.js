import Link from "next/link";
export default function HeadersLink() {
    return (
        <center>
            <Link href="/">หนัาหลัก</Link> | 
            <Link href="/about">เกี่ยวกับ</Link> | 
            <Link href="/service">บริการ</Link> | 
            <Link href="/contact">ติดต่อ</Link>
        </center>
    )
}