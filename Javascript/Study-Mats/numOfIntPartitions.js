function partitions(n) {
  
    const result = new Array(n + 1).fill(0)
    result[0] = 1
    for (let i = 1; i <= n; i++) for (let j = i; j <= n; j++) result[j] += result[j - i]
    return result[n]
    
}


console.log(
    partitions(1), // 1
    partitions(5), // 7
    partitions(10), // 42
    partitions(25), // 1958
    partitions(50),
    partitions(75),
    partitions(100)
)