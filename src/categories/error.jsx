function Error(error) {
  return (
    <>
      <h1> error!</h1>
      <div>Error loading products: {error.message}</div>
      <div> TODO maybe insert a pic of whiskey being silly</div>
    </>
  );
}

export { Error };
