import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { MessageSquare, Menu } from "lucide-react";
import {   Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger, } from "./ui/dialog";

export const DialogDrawerSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Interactive Components
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        {/* Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="gap-2 hover-lift">
              <MessageSquare className="h-5 w-5" />
              Open Dialog
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Welcome to Our Platform</DialogTitle>
              <DialogDescription>
                This is a dialog component showcasing our interactive features. You can use
                dialogs for important messages, forms, or confirmations.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                Explore our comprehensive training programs and certifications designed to
                elevate your professional skills.
              </p>
            </div>
          </DialogContent>
        </Dialog>

        {/* Drawer */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button size="lg" variant="secondary" className="gap-2 hover-lift">
              <Menu className="h-5 w-5" />
              Open Drawer
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Navigation Menu</DrawerTitle>
              <DrawerDescription>
                Access all features and sections from this drawer.
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-4 pb-4">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors cursor-pointer">
                  <h4 className="font-semibold">Programs</h4>
                  <p className="text-sm text-muted-foreground">Browse our training programs</p>
                </div>
                <div className="p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors cursor-pointer">
                  <h4 className="font-semibold">Certifications</h4>
                  <p className="text-sm text-muted-foreground">View available certifications</p>
                </div>
                <div className="p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors cursor-pointer">
                  <h4 className="font-semibold">About Us</h4>
                  <p className="text-sm text-muted-foreground">Learn more about our mission</p>
                </div>
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};
