import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "components/ui/sheet"

  import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  
  interface User {
    userId: number;
    id:number;
    title:string;
    body:string;
  }

export function InfoCard(userData:User){
    return(
        <Sheet>
            <SheetTrigger asChild>
                <Card className="w-96 h-50 hover:border-blue-200 hover:cursor-pointer">
                    <CardHeader>
                        <CardTitle>{userData.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>User ID: {userData.userId}</p>
                    </CardContent>
                    <CardFooter>
                        <p>ID: {userData.id}</p>
                    </CardFooter>
                </Card>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>{userData.title}</SheetTitle>
                <SheetDescription>
                    {userData.body}
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}