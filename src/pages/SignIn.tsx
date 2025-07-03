import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GoogleIcon } from '@/assets/indexsvg';
import BrandBanner from '@/components/BrandBanner';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log("hello");
    navigate('/');
  };

  return (
    <div className="flex h-dvh w-full">
      <div className="flex flex-1 items-center justify-center">
        <div>
          <Card className="w-xs sm:w-sm">
            <CardHeader>
              <CardTitle className="text-4xl">Sign In</CardTitle>
              <CardDescription className="">
                Enter your email and password to sign in!
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-5">
              <Button>
                {GoogleIcon}
                Sign In with Google
              </Button>

              <div className="flex h-[1px] w-full items-center justify-center bg-white/10">
                <div className="bg-card flex h-10 w-10 items-center justify-center">
                  Or
                </div>
              </div>

              <div className="grid w-full max-w-sm flex-col items-center gap-3">
                <Label htmlFor="email">
                  Email<span className="text-gray-200">*</span>
                </Label>
                <Input
                  id="email"
                  placeholder="mail@simmmple.com"
                  type="email"
                />
              </div>

              <div className="grid w-full max-w-sm flex-col items-center gap-3">
                <Label htmlFor="password">
                  Password<span className="text-gray-200">*</span>
                </Label>
                <Input
                  id="password"
                  placeholder="Min. 8 characters"
                  type="password"
                />
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Keep Me Log In</Label>
                </div>
                <Button variant="link">Forgot Password?</Button>
              </div>

              <Button onClick={handleSignIn} size="lg">Sign In</Button>
            </CardContent>

            <CardFooter>
              <p className="text-muted-foreground text-sm">
                Don't have a account?{' '}
                <Button
                  className="px-0 text-sm font-medium"
                  variant="link"
                >
                  Create an Account
                </Button>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      <BrandBanner></BrandBanner>
    </div>
  );
};
