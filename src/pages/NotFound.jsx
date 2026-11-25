export const NotFound = () => {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-foreground">
      <div className="text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="text-3xl">Page not found</h1>
        <a href="/" className="btn-primary mt-8">
          Back home
        </a>
      </div>
    </main>
  );
};
