import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { v4 as uuidV4 } from "uuid";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onIdSubmit(idRef.current.value);
  }

  function createNewId() {
    onIdSubmit(uuidV4());
  }

  return (
    <main className="h-dvh w-screen flex flex-row justify-center items-center">
      <Card className=" w-4/5 max-w-[30rem]">
        <CardHeader>
          <CardTitle className="text-3xl text-left font-bold">
            Welcome to whatsapp-clone!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Separator className="mb-3"></Separator>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 justify-start items-start">
              <label className="text-lg text-foreground font-semibold">
                Enter your ID
              </label>
              <Input type="text" ref={idRef} required />
            </div>
            <div className="flex flex-col gap-3 m-3 justify-around items-center">
              <Button type="submit" className="font-semibold">
                Login
              </Button>
              <p>or</p>
              <Button
                onClick={createNewId}
                variant="secondary"
                className="font-semibold"
              >
                Create a new ID
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
