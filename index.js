//   9
//  7  10
// 5 8   12

tree={
    number:9,
    left:{
        number:8,
        left:{
            
    
        },
        right:{
    
        }


    },
    right:{

    }
}
function binaryTree(tree){
    if(tree.right){
        binaryTree(tree.right);
    }
    console.log(tree.number);
    if(tree.left){
        binaryTree(tree.left);
    }

    // console.log(tree.number);
    // else {
    //     return ()

    // }
}

