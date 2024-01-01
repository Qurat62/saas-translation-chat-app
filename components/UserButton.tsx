"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signIn,signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


function UserButton({ session }: { session: Session | null }) {
  const router=useRouter();

  if (!session) 
  return (
  <Button variant={"outline"} onClick={()=>signIn()}>Sign In</Button>
  );

  // const handlePricing=()=>{
  //   router.push(`/PricingCards`)
  // }
<Button onClick={()=>signIn()}>Sign INNNn</Button>
  return session &&(
    <DropdownMenu>
     
      <DropdownMenuTrigger>
        <UserAvatar
          name={session.user?.name}
          image={session.user?.image}
        />
      </DropdownMenuTrigger>
      
      <DropdownMenuContent>
        <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=>signOut()}>Sign Out</DropdownMenuItem>
         {/* <DropdownMenuItem onClick={handlePricing}>Billing</DropdownMenuItem> */}
        {/*<DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
