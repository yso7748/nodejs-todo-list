export default (error, req, res, next) => {
  console.log('에러 처리 미들웨어가 실행되었습니다.');
  console.error(error);
  if (error.name === 'ValidationError') {
    return res.status(400).json({ errormessage: error.message });
  }

  return res
    .status(500)
    .json({ errormessage: '서버에서 에러가 발생했습니다.' });
};
