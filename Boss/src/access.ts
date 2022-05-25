export default function (initalState) {
  const { userId, role } = initalState;
  return {
    canReadFoo: true,
    canUpdateFoo: role === 'admin',
    canDeleteFoo: (foo) => {
      return foo.userId === userId;
    },
  };
}
