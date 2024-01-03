function anaGram(s,t){
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    return s === t;

}

console.log(anaGram("11hj","h11j"))