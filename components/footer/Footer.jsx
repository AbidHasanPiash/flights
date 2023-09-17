import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaSquareFacebook, FaInstagram, FaSquareXTwitter, FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className='bg-night text-day py-20'>
        <div className='spaceing'>
            <div className='pb-20 space-y-20'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    <div className='col-span-1'>
                        <h4 className='font-semibold'>About Us</h4>
                        <p className='text-sm py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quidem deleniti esse animi, neque, velit ut consequatur unde ipsam accusamus nulla nisi molestias tempora atque in sed officia! At, quod.</p>
                    </div>
                    <div className='col-span-1 flex flex-col'>
                        <h4 className='font-semibold'>Need Help</h4>
                        <p className='text-sm py-4'>
                            Ka 11/2A, Bashundhora R/A Road, <br />
                            Jagannathpur, Dhaka 1229.
                        </p>
                        <Link className='text-sm underline py-0.5' href={'mailto: support@flyfarint.com'}>support@flyfarint.com</Link>
                        <Link className='text-sm underline py-0.5' href={'tell:+8809606912912'}>+880 9606 912 912</Link>
                        <Link className='text-sm underline py-0.5' href={'tell:+8801755572099'}>+880 1755 572 099</Link>
                    </div>
                    <div className='col-span-2 flexBetween'>
                        <div>
                            <h4 className='font-semibold'>About</h4>
                            <ul className='text-sm py-4 space-y-2'>
                                <li>About us</li>
                                <li>Features</li>
                                <li>News</li>
                                <li>Menu</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='font-semibold'>Conpany</h4>
                            <ul className='text-sm py-4 space-y-2'>
                                <li>Why others</li>
                                <li>Partner with us</li>
                                <li>FAQ</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='font-semibold'>Support</h4>
                            <ul className='text-sm py-4 space-y-2'>
                                <li>Account</li>
                                <li>Support Center</li>
                                <li>Feedback</li>
                                <li>Contact US</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div className='space-y-4'>
                        <h4 className='font-semibold'>We Accept</h4>
                        <Image src={'/images/accept.png'} height={100} width={500} alt='accept'/>
                    </div>
                    <div className='flex justify-start md:justify-end'>
                        <div className='space-y-4'>
                            <h4 className='font-semibold'>Social</h4>
                            <div className='flexStart space-x-3 text-2xl'>
                                <FaSquareFacebook/>
                                <FaInstagram/>
                                <FaLinkedin/>
                                <FaSquareXTwitter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-300 pt-6 text-center'>
                <p>
                    <span>&copy; 2023 All Right Received by BRAC & Developed By </span>
                    <Link target='_blank' href={'https://flyfar.tech/'} className='underline'>Fly Far Tech</Link>
                </p>
            </div>
        </div>
    </footer>
  )
}
