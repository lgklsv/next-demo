import NavigationLink from "./NavigationLink";

export default function Nav() {
  return (
    <nav className="flex flex-col justify-start space-y-2">
      <NavigationLink href="/" prefetch>
        Home
      </NavigationLink>

      <NavigationLink href="/star-wars" prefetch>
        Star Wars
      </NavigationLink>
    </nav>
  );
}
