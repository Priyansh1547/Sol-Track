"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";

export function ProfileComponent() {
  const session = useSession();
  console.log(session.data?.user?.image);
  return (
    <div className="w-[800px] border-2  rounded-xl p-4 ">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Profile</h1>
          <p className="text-sm text-muted-foreground">
            Manage settings for your Sol-Track profile
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <Label>Profile Picture</Label>
            <div className="flex items-center gap-4 mt-2">
              <Avatar className="h-16 w-16">
                <AvatarImage src={session.data?.user?.image || ""} />
                <AvatarFallback>PP</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="fullname">name</Label>
            <Input
              disabled
              id="fullname"
              value={session.data?.user?.name || ""}
            />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              disabled
              id="email"
              value={session.data?.user?.email || ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
