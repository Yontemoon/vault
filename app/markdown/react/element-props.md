# Element Props

### November 3rd, 2024

---

While working on creating dummy components such as buttons or cards, I would resort to setting types such as this:

```tsx
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};
```

Nothing is necessarily wrong, but it's syntax heavy and kind of confusing. One would have to import specific HTML attributes and Element types such as divs, buttons, etc.

Something simplier would be to do this:

```tsx
type ButtonProps = {
  children: React.ReactNode;
} & ComponentProps<"button">;
```

Straight forward, right?

Both are exactly the same thing, but I would argue the ComponentProps types is much easier to read and remember when creating dummy components.

So the full simplified dummy Button component would look like this:

```tsx
type ButtonProps = {
  children: React.ReactNode;
} & ComponentProps<"button">;

const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

const ParentComponent = () => {
  return <Button>Click Me</Button>;
};

export default Button;
```
