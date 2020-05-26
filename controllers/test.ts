const testRoute = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: "Hello World!",
  };
};

export { testRoute };
