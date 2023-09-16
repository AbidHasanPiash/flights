import Link from 'next/link';

export default function TabLink({ href, icon, text }) {
  return (
    <Link href={href} passHref>
      <span className='px-4 py-2 rounded-t-md text-sm bg-primary flexCenter space-x-2'>
        {icon}
        <span>{text}</span>
      </span>
    </Link>
  )
}
