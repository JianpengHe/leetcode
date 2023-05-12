/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
  /** 转换成那3个点放哪里的问题 */
  const out: string[] = [];
  const length = s.length;
  if (length > 12 || length < 4) {
    return out;
  }
  const check = (str: string) => str && Number(str) < 256 && !/^0.+/.test(str);
  for (let p1 = 0; p1 < 3; p1++) {
    const n1 = s.substring(0, p1 + 1);
    if (!check(n1)) {
      continue;
    }
    for (let p2 = p1 + 1; p2 <= p1 + 3; p2++) {
      const n2 = s.substring(p1 + 1, p2 + 1);
      if (!check(n2)) {
        continue;
      }
      for (let p3 = p2 + 1; p3 <= p2 + 3; p3++) {
        const n3 = s.substring(p2 + 1, p3 + 1);
        const n4 = s.substring(p3 + 1);
        if (!check(n3) || !check(n4)) {
          continue;
        }
        out.push(`${n1}.${n2}.${n3}.${n4}`);
      }
    }
  }
  return out;
}
// @lc code=end

restoreIpAddresses("101023");
