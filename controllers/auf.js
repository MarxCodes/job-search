const rej = async (req,res)  => {
  res.send('route activated')

}

module.exports = {
  rej: rej,
}