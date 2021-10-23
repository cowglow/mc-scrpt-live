<script lang="ts">
  export let date: Date;
  const currentDate = new Date();
</script>

<div>
  <p>
    {`0${date.getDate() - currentDate.getDate()}`.slice(-2)}
    <span>Days</span>
  </p>
  <p>
    {`0${date.getTime() - currentDate.getTime()}`.slice(-2)}
    <span>Hrs</span>
  </p>
  <p>
    {`0${date.getMinutes() - currentDate.getMinutes()}`.slice(-2)}
    <span>Mins</span>
  </p>
  <p>
    {`0${date.getSeconds() - currentDate.getSeconds()}`.slice(-2)}
    <span>Secs</span>
  </p>
</div>

<style>
  div {
    display: flex;
  }
  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: white;
    width: 52.58px;
    height: 59.41px;
    font-family: Teko, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    text-align: center;
    color: #000000;
    margin: 0 21.36px;
  }
  span {
    font-family: Teko, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    /*line-height: 23px;*/
    text-align: center;
    color: #000000;
  }
</style>
