import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-night text-day py-20'>
        <div className='spaceing'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 pb-20'>
                <div className='col-span-1'>
                    <h4>About Us</h4>
                    <p className='text-sm py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quidem deleniti esse animi, neque, velit ut consequatur unde ipsam accusamus nulla nisi molestias tempora atque in sed officia! At, quod.</p>
                </div>
                <div className='col-span-1 flex flex-col'>
                    <h4>Need Help</h4>
                    <p className='text-sm py-2'>
                        Ka 11/2A, Bashundhora R/A Road, <br />
                        Jagannathpur, Dhaka 1229.
                    </p>
                    <Link className='text-sm underline py-0.5' href={'mailto: support@flyfarint.com'}>support@flyfarint.com</Link>
                    <Link className='text-sm underline py-0.5' href={'tell:+8809606912912'}>+880 9606 912 912</Link>
                    <Link className='text-sm underline py-0.5' href={'tell:+8801755572099'}>+880 1755 572 099</Link>
                </div>
                <div className='col-span-2'>
                    Links
                </div>
            </div>
            <div className='border-t border-gray-300 pt-6 text-center'>
                <p>&copy; 2023 All Right Received by BRAC & Developed By Fly Far Tech</p>
            </div>
        </div>
    </footer>
  )
}
