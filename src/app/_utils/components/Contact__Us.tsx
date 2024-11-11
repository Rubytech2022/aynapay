'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Send } from "lucide-react"
import Link from 'next/link'


export default function ContactUs() {
    const [form, setForm] = useState({
        name: '',
        telegram_username: '',
        website: '',
        email: '',
        message: ''
    })


    return (
        <div className="w-full max-w-[900px] mx-auto p-4 my-[80px] md:grid grid-cols-5 gap-5">
            <div className=' col-span-2 pb-10 md:pb-0'>
                <h3 className='text-[14px] font-medium text-primary pb-5'>CONTACT US</h3>
                <div className='max-w-[340px] flex-wrap text-[32px] font-semibold flex items-center'>{`Let's`} Connect <p className='mx-[10px] w-[60px] h-[20px] rounded-full bg-gradient-to-r from-emerald-600 to-green-600'></p> Get in Touch with Us</div>

                <div className='pt-[20px] md:pt-[40px] pb-5'>
                    <Link href="mailto:info@aynapay.com" className='flex items-center gap-2'>
                        <div className='icon flex items-center justify-center rounded-full bg-[#2A4157] w-[30px] h-[30px]'>
                            <Mail  className=' text-white w-4 h-4'/>
                        </div>
                        <div className=' text-[17px] hover:underline'>
                            info@aynapay.com
                        </div>
                    </Link> 
                </div>
                <div className=''>
                    <Link target='_blank' href="https://t.me/AynaPayofficia" className='flex items-center gap-2'>
                        <div className='icon flex items-center justify-center rounded-full bg-[#229ED9] w-[30px] h-[30px]'>
                            <Send  className=' text-white w-4 h-4'/>
                        </div>
                        <div className=' text-[17px] hover:underline'>
                            @AynaPayofficia
                        </div>
                    </Link> 
                </div>

            </div>
            <form className="space-y-6  col-span-3 py-5 rounded-lg p-5 ml-0 md:ml-20 shadow-md ">
                <div className=' grid grid-cols-2 gap-5'>
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            placeholder="John"
                            className="bg-[#F8F9FE]  rounded-full"
                            name='name'
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="telegram">Telegram Username</Label>
                        <Input
                            id="telegram"
                            placeholder="@john"
                            className="bg-[#F8F9FE] rounded-full"
                            name='telegram_username'
                            value={form.telegram_username}
                            onChange={(e) => setForm({ ...form, telegram_username: e.target.value })}
                        />
                    </div>
                </div>
                <div className=' grid grid-cols-2 gap-5'>
                    <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input
                            id="website"
                            placeholder="www.john.com"
                            className="bg-[#F8F9FE] rounded-full"
                            name='website'
                            value={form.website}
                            onChange={(e) => setForm({ ...form, website: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john@email.com"
                            className="bg-[#F8F9FE] rounded-full"
                            name="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Message (optional)</Label>
                    <div className="relative">
                        <Textarea
                            id="message"
                            name='message'
                            placeholder="Tell us about your business and requirements"
                            className="min-h-[120px] bg-[#F8F9FE] "
                            maxLength={300}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                        />
                        <span className="absolute bottom-2 right-2 text-sm text-muted-foreground">
                            {form.message.length}/300
                        </span>
                    </div>
                </div>

                <Button
                    className="w-full bg-primary hover:bg-primary text-white py-6 rounded-full"
                    size="lg"
                >
                    Send your Request
                </Button>
            </form>
        </div>
    )
}