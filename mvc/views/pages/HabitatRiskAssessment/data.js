var PostInformation = {
    'author': 'MQT', 
    'Date': '20',
    'Month': 'Jan',
    'Year': '2022' 
}

var PostData = [
    {
        'Index': "Bảng thông tin sinh cảnh - nhân tố stress",
        'Label': "Habitat stressor info",
        'Content': `
            <table style="width: 100%; height: fit-height; border: 1px solid;">
                <tr>
                    <td>Name</td>
                    <td>Path</td>
                    <td>Type</td>
                    <td>Stressor buffer (meters)</td>
                </tr>
                <tr>
                    <td>Mangrove</td>
                    <td>...</td>
                    <td>habitat</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Shoreline eroision</td>
                    <td>...</td>
                    <td>stressor</td>
                    <td>0</td>
                </tr>
            </table>
        `
    },
    {
        'Index': "Bảng thông đánh giá sinh cảnh và nhân tố stress dựa trên các tiêu chí E & C",
        'Label': "Habitat stressor EC",
        'Content': `
            <table style="width: 100%; height: fit-content;">
                <tr>
                    <th>Habitat Name</th>
                    <th colspan="3">Mangrove</th>
                    <th>Criteria type</th>
                </tr>
                <tr>
                    <td>Habitat resilience attribute</td>
                    <td>RATING</td>
                    <td>DQ</td>
                    <td>WEIGHT</td>
                    <td>CRITERIA TYPE</td>
                </tr>
                <tr>
                    <td>recruitment rate</td>
                    <td>1</td>
                    <td>3</td>
                    <td>3</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>natural mortability</td>
                    <td>0</td>
                    <td>3</td>
                    <td>3</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>connectivity rate</td>
                    <td>0</td>
                    <td>3</td>
                    <td>3</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>recovery time</td>
                    <td>2</td>
                    <td>3</td>
                    <td>3</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td colspan="5"><span style="visibility: hidden;">a</span></td>
                </tr>
                <tr>
                    <td>Habitat stressor overlap properties</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Shoreline eroison</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>frequency of disturbance</td>
                    <td>0</td>
                    <td>3</td>
                    <td>3</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>change in area rating</td>
                    <td>1</td>
                    <td>3</td>
                    <td>3</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>change in structure rating</td>
                    <td>1</td>
                    <td>3</td>
                    <td>3</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>temporal overlap rating</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>E</td>
                </tr>
                <tr>
                    <td>management effiveness</td>
                    <td>1</td>
                    <td>3</td>
                    <td>3</td>
                    <td>E</td>
                </tr>
                <tr>
                    <td>intensity rating</td>
                    <td>1</td>
                    <td>3</td>
                    <td>3</td>
                    <td>E</td>
                </tr>
            </table>
        `
    },
    {
        'Index': "Bản đồ sử dụng",
        'Label': "Map",
        'Content': `
            <a href="https://drive.google.com/drive/folders/1-ICLhgoxPxAzvblCFdw27GsKJrgQvVRG?usp=sharing" target="_blank">Thư mục download bản đồ dữ liệu đầu vào</a>
        `
    },
    {
        'Index': "Kết quả",
        'Label': "Result",
        'Content': `
            <a href="https://code.earthengine.google.com/506360ea37f7250b57ee19688298eb36?hideCode=true" target="_blank">Link</a>
        `
    }
]