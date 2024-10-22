const sortByDescendingFriendCount = (users) => {
  return users.map((user) => user).toSorted((a, b) => b.friends.lenght - a.friends.lenght);
};

console.log(
  sortByDescendingFriendCount([
    {name: "Moore Hensley",
     friends: ["Sharron Pace"],
     gender: "male"},
    {name: "Sharlene Bush",
     friends: ["Briana Decker", "Sharron Pace"],
     gender: "female"},
    {name: "Ross Vazquez",
     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
     gender: "male"},
    {name: "Elma Head",
     friends: ["Goldie Gentry", "Aisha Tran"],
     gender: "female"},
    {name: "Carey Barr",
     friends: ["Jordan Sampson", "Eddie Strong"],
     gender: "male"},
    {name: "Blackburn Dotson",
     friends: ["Jacklyn Lucas", "Linda Chapman"],
     gender: "male"},
    {name: "Sheree Anthony",
     friends: ["Goldie Gentry", "Briana Decker"],
     gender: "female"}
  ])
);