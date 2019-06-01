import React from 'react';
import { Table } from 'react-bootstrap';

class product_order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      data: [],
      firm_sid: 99,
    };
  }
  componentDidMount() {
    fetch('//localhost:3002/product/firm_order', {})
      //fetch order
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({ orderall: jsonData });
        // console.log(this.state.game_type);
        var aaa = this.state.orderall.length;
        var gotit = [];
        for (let i = 0; i < aaa; i++) {
          if (this.state.orderall[i].seller == this.state.firm_sid) {
            gotit.push(this.state.orderall[i]);
          }
        }
        this.setState({ data: gotit });
      })
      .catch(err => {
        // console.log('錯誤:', err)
      });
  }
  render() {
    return (
      <>
        <h5>商品訂單紀錄</h5>
        <hr />
        <div className="cart">
          <div className="myfav-table mb-5">
            <Table striped bordered hover>
              <thead className="table_head">
                <tr>
                  <th />
                  <th>ORDER_SID</th>
                  <th>total</th>
                  <th>cre_date</th>
                  <th>order_name</th>
                  {/* <th>小計</th> */}
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((item, index, array) => (
                  <tr>
                    <td key={index}>{index + 1}</td>
                    <td>{this.state.data[index].order_sid}</td>
                    <td>{this.state.data[index].totalprice}</td>
                    <td>{this.state.data[index].cre_date}</td>
                    <td>{this.state.data[index].order_name}</td>
                    {/* <td>{this.state.data[index].totall}</td> */}
                    <td>
                      <button
                        className="m-1 button button"
                        block
                        // onClick={this.deleteit(index)}
                      >
                        刪除
                      </button>
                      <button
                        className="m-1 button button"
                        block
                        // onClick={this.goto(this.state.data[index].sid)}
                      >
                        詳細資料
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </>
    );
  }
}

export default product_order;
