function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; 
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById('result').textContent = 'กรุณากรอกตัวเลขที่ถูกต้องสำหรับน้ำหนักและส่วนสูง';
      return;
    }
  
    const bmi = (weight / (height * height)).toFixed(2);
    let status = '';
  
    if (bmi < 18.5) {
      status = 'ผอมเกินนะ';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = 'ปกติจ้า';
    } else if (bmi >= 25 && bmi <= 29.9) {
      status = 'เริ่มอ้วนแล้ว';
    } else {
      status = 'อ้วนแล้วนะ';
    }
  
    document.getElementById('result').textContent = `ค่า BMI ของคุณคือ ${bmi} (${status})`;
  }
  