def buying_candy( amount_of_money ) :
  if amount_of_money <= 0:
    return 0
  dp = {
    0: 1,
    1: 1
  }
  x = 0
  while x < amount_of_money:
    dp[x] = dp[x] + dp[x - 1]

  return dp[amount_of_money]
