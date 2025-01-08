const SupplierModel = require('../../models/supplier/SupplierModel')

class SupplierController {

  // lấy danh sach nhập hàng theo id của nhà cung cấp
  async getAllNhapHangById(req, res) {
    try {
      const { nhaCungCapId } = req.body;
      console.log(nhaCungCapId)
      const idNguoiDung = req.user.idNguoiDung
      console.log(req?.user)
      SupplierModel.getAllNhapHangById(idNguoiDung, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_ALL_NHAP_HANG_ERROR',
            message: 'Lấy thông tin nhập hàng thất bại'
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy yêu cầu nhập hàng nào'
          })
        }
        return res.status(200).json({
          success: true,
          message: 'Lấy thông tin nhập hàng thành công',
          data: result
        });
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'GET_ALL_NHAP_HANG_ERROR',
        message: 'Lỗi khi lấy thông tin nhập hàng'
      });
    }
  }

  // xác nhận nhập hàng, cập nhật trạng thái
  async updateStatusNhapHang(req, res) {
    try {
      const { trangThai, idNhapHang } = req.body;
      console.log(req.body);
      SupplierModel.updateStatusNhapHang(trangThai, idNhapHang, (err, result) => {
        console.log('err:::', err);
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'UPDATE_STATUS_NHAP_HANG_ERROR',
            message: 'Lỗi khi xác nhận nhập hàng'
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy yêu cầu nhập hàng nào'
          })
        }
        return res.status(200).json({
          success: true,
          message: 'Xác nhận nhập hàng thành công',
        });
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'UPDATE_STATUS_NHAP_HANG_ERROR',
        message: 'Lỗi khi xác nhận nhập hàng'
      });
    }
  }
  //hủy yêu cầu nhập hàng
  async cancelNhapHang(req, res) {
    try {
      const { trangThai, idNhapHang } = req.body;
      console.log(req.body);
      SupplierModel.cancelNhapHang(trangThai, idNhapHang, (err, result) => {
        // console.log('err:::', err);
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'UPDATE_STATUS_NHAP_HANG_ERROR',
            message: 'Lỗi khi hủy nhập hàng'
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy yêu cầu nhập hàng nào'
          })
        }
        return res.status(200).json({
          success: true,
          message: 'Xác nhận hủy nhập hàng thành công',
        });
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'UPDATE_STATUS_NHAP_HANG_ERROR',
        message: 'Lỗi khi hủy nhập hàng'
      });
    }
  }
}


module.exports = new SupplierController();