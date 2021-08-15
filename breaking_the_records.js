function breakingRecords(scores) {
  let [best] = scores
  let worst = best

  const count = scores.reduce((acc, cur) => {
    if (best < cur) {
      best = cur
      return {
        max: [...acc.max, cur],
        min: acc.min
      }
    }

    if (worst > cur) {
      worst = cur
      return {
        max: acc.max,
        min: [...acc.min, cur]
      }
    }

    return {
      max: acc.max,
      min: acc.min
    }

  }, { max: [], min: [] })

  const { max, min } = count

  console.log(`${max.length} ${min.length}`)

}

function iint() {
  const args = process.argv[2].split(',').map(Number)
  console.log(args)
  breakingRecords(args)
}

iint()