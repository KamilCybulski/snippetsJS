//Courtesy of mr Reginald Braithwaite, JavaScript Allonge

const copy = (node, head = null, tail = null) => {
  if (node === EMPTY) {
    return head;
  }
  else if (tail === null) {
    const { first, rest } = node;
    const newNode = { first, rest };
    return copy(rest, newNode, newNode);
  }
  else {
    const { first, rest } = node;
    const newNode = { first, rest };
    tail.rest = newNode;
    return copy(node.rest, head, newNode); 
  }
}

//This algorithm makes copies of nodes as it goes, and mutates the last node in the list so that it can splice the next one on.
//OBVIOUSLY!

/*Notes:
-When you make a second call of copy(), head parameter has a newNode value from the previous call [gibberish gibbersh trololo]

*/