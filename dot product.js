/*Name: Dot product
Description:
1-Write a procedure, called dot_product which calculates in the variable ps,
    the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
2-Write an algorithm which determines, for n pairs of given vectors,
    whether two vectors of given IR are orthogonal, by calling the procedure defined
    in the previous question. The dot product of two orthogonal vectors is zero.
3-Modify the previous algorithm if you use a dot_product function instead of 
    a procedure.*/


function dotproduct(v1, v2) {
    var ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

function isorthogonal(v1, v2) {
    var result = dotproduct(v1, v2);
    if (result === 0) {
        return true;
    } else {
        return false;
    }
}

function checkorthogonality(vectors) {
    for (let i = 0; i < vectors.length; i++) {
        var v1 = vectors[i][0];
        var v2 = vectors[i][1];
        if (isorthogonal(v1, v2)) {
            console.log ('Vector pair '+(i+1)+ ' is orthogonal');
        } else {
            console.log ('Vector pair '+ (i+1) +' is not orthogonal');
        }
    }
}

