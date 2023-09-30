import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './TermsForm.module.css';
import axios from 'axios';

export default function TermsForm({ id, title }) {
  const location = useLocation();
  const name = location.state.name;
  const email = location.state.email;
  const password = location.state.password;
  const phone = location.state.phone;
  const choose = location.state.choose;

  function postinfo() {
    console.log('실행중', id);
    console.log(name, email, password, phone);
    axios
      .post('/member/signup/consultant', {
        name: name,
        email: email,
        password: password,
        checkPassword: password,
        phoneNumber: phone,
        category: choose,
      })
      .then((response) => {
        console.log('201', response.data);

        if (response.status === 201) {
          console.log('회원가입 완료');
        }
      })
      .catch((error) => console.log(error.response));
  }

  const navigate = useNavigate();

  function goterms() {
    navigate('/joincomplete', {
      state: {
        name: name,
      },
    });
    postinfo();
  }
  return (
    <div className={styles.container}>
      <p className={styles.terms}>
        지할 수 있으며, 해지할 경우에는 본인이 직접 서비스를 통하거나 전화 또는
        온라인 등으로 사이트에 해지신청을 하여야 합니다. 사이트는 해지신청이
        접수된 당일부터 해당 회원의 서비스 이용을 제한합니다. 사이트는 회원이
        다음 각 항의 1에 해당하여 이용계약을 해지하고자 할 경우에는 해지조치
        7일전까지 그 뜻을 이용고객에게 통지하여 소명할 기회를 주어야 합니다. ①
        이용고객이 이용제한 규정을 위반하거나 그 이용제한 기간 내에 제한 사유를
        해소하지 않는 경우 ② 정보통신윤리위원회가 이용해지를 요구한 경우 ③
        이용고객이 정당한 사유 없이 의견진술에 응하지 아니한 경우 ④ 타인 명의로
        신청을 하였거나 신청서 내용의 허위 기재 또는 허위서류를 첨부하여
        이용계약을 체결한 경우 사이트는 상기 규정에 의하여 해지된 이용고객에
        대해서는 별도로 정한 기간동안 가입을 제한할 수 있습니다. 제6장 손해배상
        제 14 조 (면책조항) ① 사이트는 회원이 서비스 제공으로부터 기대되는
        이익을 얻지 못하였거나 서비스 자료에 대한 취사선택 또는 이용으로
        발생하는 손해 등에 대해서는 책임이 면제됩니다. ② 사이트는 회원의
        귀책사유나 제3자의 고의로 인하여 서비스에 장애가 발생하거나 회원의
        데이터가 훼손된 경우에 책임이 면제됩니다. ③ 사이트는 회원이 게시 또는
        전송한 자료의 내용에 대해서는 책임이 면제됩니다. ④ 상표권이 있는
        도메인의 경우, 이로 인해 발생할 수도 있는 손해나 배상에 대한 책임은
        구매한 회원 당사자에게 있으며, 사이트는 이에 대한 일체의 책임을 지지
        않습니다. 제 15 조 (관할법원) 서비스와 관련하여 사이트와 회원간에 분쟁이
        발생할 경우 사이트의 본사 소재지를 관할하는 법원을 관할법원으로 합니다.
        [부칙] (시행일) 이 약관은 2015년 01월부터 시행합니다. URL복사 Twitter
        Facebook 출력
      </p>
      <button className={styles.btn} onClick={goterms}>
        동의합니다
      </button>
    </div>
  );
}
