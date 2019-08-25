let msg: string;
msg = "abc";
let endsWithC = (<string>msg).endsWith("c");
let alternativeWay = (msg as string).endsWith("c");
