import { SiteHeader } from "@/components/site-header"
import { Sparkles, MessageCircle, Send, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function CustomerServicePage() {
  return (
    <div className="min-h-screen bg-black/90 text-white">
      <SiteHeader />

      <main className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-center mb-10">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full max-w-xs"></div>
          <h2 className="px-4 text-2xl font-cinzel font-semibold text-purple-300 flex items-center">
            <MessageCircle className="h-5 w-5 mr-2 text-purple-400" />
            Customer Service
            <Sparkles className="h-5 w-5 ml-2 text-purple-400" />
          </h2>
          <div className="h-px bg-gradient-to-r from-purple-500 via-purple-500 to-transparent w-full max-w-xs"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="bg-gray-900/80 rounded-lg border border-purple-900/30 p-6 magic-border mb-8">
                <h3 className="text-xl font-cinzel font-semibold mb-4 text-purple-400">Contact Us</h3>
                <p className="text-gray-300 mb-6">
                  Have questions about your order, our products, or need magical advice? Our witches are ready to assist
                  you through various channels.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-purple-400" />
                    <span>support@salemslegacy.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-purple-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/80 rounded-lg border border-purple-900/30 p-6 magic-border">
                <h3 className="text-xl font-cinzel font-semibold mb-4 text-purple-400">Social Media</h3>
                <p className="text-gray-300 mb-6">
                  Connect with us on social media for the latest updates, magical tips, and community events.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="https://t.me/salemslegacy"
                    target="_blank"
                    className="flex items-center gap-2 p-3 bg-gray-800/60 rounded-lg hover:bg-purple-900/30 transition"
                  >
                    <svg className="w-5 h-5 text-[#0088cc]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.296c-.146.658-.537.818-1.084.51l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.538-.196 1.006.128.832.924z" />
                    </svg>
                    <span>Telegram</span>
                  </Link>

                  <Link
                    href="https://tiktok.com/@salemslegacy"
                    target="_blank"
                    className="flex items-center gap-2 p-3 bg-gray-800/60 rounded-lg hover:bg-purple-900/30 transition"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                    <span>TikTok</span>
                  </Link>

                  <Link
                    href="https://wa.me/15551234567"
                    target="_blank"
                    className="flex items-center gap-2 p-3 bg-gray-800/60 rounded-lg hover:bg-purple-900/30 transition"
                  >
                    <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>WhatsApp</span>
                  </Link>

                  <Link
                    href="viber://chat?number=%2B15551234567"
                    target="_blank"
                    className="flex items-center gap-2 p-3 bg-gray-800/60 rounded-lg hover:bg-purple-900/30 transition"
                  >
                    <svg className="w-5 h-5 text-[#7360f2]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.693 6.698.623 9.82c-.06 3.11-.122 8.946 5.5 10.565v2.421s-.038.97.602.582c.79-.475 2.066-1.822 2.693-2.424 2.796.234 4.99-.302 5.228-.381.48-.158 3.176-.502 3.61-4.102.453-3.748.217-7.705-1.14-9.434-.63-.795-1.546-1.655-3.35-2.2C13.098.97 12.347.956 11.398.002zm.129 1.83c.72-.02 1.308.057 1.835.18 1.22.363 1.913.915 2.373 1.509 1.118 1.429 1.16 4.857.776 7.956-.301 2.46-2.054 2.565-2.4 2.67-.2.066-2.235.48-4.36.342-.89.519-1.786 1.408-2.232 1.773-.14.119-.31.094-.304-.124-.012-.402.035-1.59.035-1.59-.007-.126.08-.25.197-.287 4.189-1.393 3.86-6.219 3.86-6.219 0-3.47-2.9-3.588-3.344-3.615-.446-.027-2.432-.006-3.705.595-1.61.769-2.137 2.36-2.193 4.122-.056 1.762.01 3.657.775 4.548.348.407.597.634.825.775.77.05.15.124.15.23 0 .126-.07.244-.188.275-.59.157-2.184.58-3.412-1.158-.855-1.221-.93-2.752-.93-4.361 0-1.609.24-3.48 1.588-5.122 1.508-1.832 3.905-2.05 3.905-2.05 1.384-.118 2.236-.08 3.6-.12z" />
                      <path d="M10.996 5.578c.14.001.27.101.29.241.022.157-.09.301-.246.323 0 0-.357.053-.704.216-.347.164-.65.388-.915.694-.311.36-.498.798-.6 1.26-.101.462-.116.957-.116.957-.01.16-.143.28-.303.27-.159-.01-.28-.143-.27-.302 0 0 .018-.565.136-1.102.118-.536.337-1.099.758-1.589.34-.394.714-.656 1.106-.839.393-.183.813-.244.813-.244a.3.3 0 0 1 .051-.005zm.072 1.313c.159.001.287.131.286.29-.001.159-.131.287-.29.286 0 0-.442.004-.89.258-.223.127-.414.294-.553.504-.14.21-.232.466-.232.466-.063.145-.23.212-.376.15-.145-.064-.212-.232-.149-.377 0 0 .117-.328.297-.6.18-.273.444-.501.734-.662.58-.32 1.173-.315 1.173-.315zm.14 1.558c.142.001.258.115.258.258 0 .142-.115.258-.258.258s-.258-.115-.258-.258c0-.142.115-.258.258-.258z" />
                    </svg>
                    <span>Viber</span>
                  </Link>

                  <Link
                    href="https://snapchat.com/add/salemslegacy"
                    target="_blank"
                    className="flex items-center gap-2 p-3 bg-gray-800/60 rounded-lg hover:bg-purple-900/30 transition"
                  >
                    <svg className="w-5 h-5 text-[#FFFC00]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.359-1.275.975-3.225 1.125-.046.193-.09.404-.127.601-.06.3-.12.614-.241.823-.136.254-.3.254-.615.254-.255 0-.556-.045-.87-.134-.556-.15-1.233-.27-2.024-.27-.839 0-1.695.165-2.534.494-.285.09-.57.165-.884.21-.345 0-.718-.09-1.018-.24-.81-.435-1.259-1.26-1.664-2.039-.045-.105-.09-.209-.135-.329-.165-.345-.435-.594-.78-.584-.271.015-.54.255-.54.57 0 .061 0 .105.016.165.015.09.046.18.076.271.09.3.18.614.271.928.104.345.195.704.3 1.049.031.044.045.104.045.165 0 .21-.149.404-.42.404-1.155.015-1.89-.899-2.145-1.304-.255-.404-.329-.899-.329-1.124 0-.061.015-.12.03-.18.285-1.17.735-2.039.814-2.144.165-.255.285-.689.164-1.094-.12-.404-.48-.764-.96-.764-.226 0-.435.044-.645.105-.641.189-1.275.345-1.95.345-.255 0-.494-.015-.734-.044-.75-.074-1.289-.314-1.694-.704-.224-.224-.405-.494-.574-.75-.225-.375-.391-.75-.54-1.064-.314-.689-.329-1.349-.329-1.349.015-.284.255-.494.523-.494h.031c.15 0 .329.045.509.09.334.074.704.165 1.084.225.185.029.369.045.539.045.48 0 .794-.149.949-.435.03-.044.045-.104.075-.149.255-.48.104-1.229-.42-2.099-.345-.555-.645-1.019-.96-1.529-.285-.479-.57-.915-.78-1.349-.12-.239-.224-.435-.239-.689 0-.284.135-.584.39-.734.104-.061.225-.09.344-.09.524 0 1.094.45 1.349.674.614.524 1.155.75 1.694.676.615-.074 1.005-.404 1.184-.899.225-.645.165-1.574.105-2.309v-.015c-.09-1.019-.18-1.979 0-2.654.195-.75.48-1.229.959-1.574.555-.375 1.215-.54 1.994-.54z" />
                    </svg>
                    <span>Snapchat</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/80 rounded-lg border border-purple-900/30 p-6 magic-border">
              <h3 className="text-xl font-cinzel font-semibold mb-4 text-purple-400">Send Us a Message</h3>
              <p className="text-gray-300 mb-6">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="Enter your name" className="bg-gray-800/80 border-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-gray-800/80 border-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What is your message about?"
                    className="bg-gray-800/80 border-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    className="bg-gray-800/80 border-gray-700 min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-600">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-10 bg-gray-900/80 rounded-lg border border-purple-900/30 p-6 magic-border">
            <h3 className="text-xl font-cinzel font-semibold mb-4 text-purple-400">Frequently Asked Questions</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-purple-300 mb-2">How long does shipping take?</h4>
                <p className="text-gray-400">
                  Standard shipping takes 3-5 business days within the continental US. International shipping may take
                  7-14 business days depending on your location.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-purple-300 mb-2">Do you offer refunds?</h4>
                <p className="text-gray-400">
                  We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you
                  can return it for a full refund or exchange.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-purple-300 mb-2">Are your crystals ethically sourced?</h4>
                <p className="text-gray-400">
                  Yes, all our crystals and magical items are ethically sourced from trusted suppliers who follow fair
                  trade practices and environmental standards.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-purple-300 mb-2">Do you offer spell consultations?</h4>
                <p className="text-gray-400">
                  Yes, we offer personal spell consultations with our experienced witches. Please contact us through the
                  form above to schedule a consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

