import Link from "next/link";
import { Poppins } from 'next/font/google';
import { LoginButton } from '@/components/auth/login-button';
import { sourceCode } from "@/components/site";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Hero from '@/components/other/Hero';
import SystemModule from '@/components/other/SystemModule';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start w-full bg-white p-10 sm:p-[30px] gap-[50px] sm:gap-[25px]">
      <section className="flex flex-row justify-center items-start self-stretch pr-[1px] max-w-full">
        <Hero 
          title="Let us take the stress out of job applications"
          subtitle="Our AI-powered technology keeps you in control"
          ctaText="Get Started"
          backgroundImage="/hero.png"
        />
      </section>
      <section className="flex flex-row flex-wrap justify-center items-start self-stretch gap-[60px] xl:gap-[10px] sm:gap-4">
        <SystemModule
          iconAI1="/iconai1.svg"
          moduleName="System Modules"
          moduleDescriptions="Our Multi-Service System Guides you through our process to find your dream job in weeks not month"
        />
        <SystemModule
          iconAI1="/iconpdf.svg"
          moduleName="Upload Resume"
          moduleDescriptions="Upload your resume with multiple file types supported including PDF, word,powerpoint and more"
        />
        <SystemModule
          iconAI1="/iconapi.svg"
          moduleName="API Job Finder"
          moduleDescriptions="Our API gateway locates positions that fit your specific requirments"
        />
        <SystemModule
          iconAI1="/iconai2.svg"
          moduleName="AI Matching"
          moduleDescriptions="ReJob AI-Powered technology matches your resume to hundreds of open positions and even suggests resume edits"
        />
        <SystemModule
          iconAI1="/icongenai.svg"
          moduleName="GenAI Portfolio"
          moduleDescriptions="our system curates your position portfolio submission and generates tailored and targeted communications with automatic submission if desired"
        />
      </section>
    </div>
  );
}
