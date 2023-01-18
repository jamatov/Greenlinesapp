import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeHeader() {
  return (
    <div className='HomeHeader'>
      <div className="header">
        <div className="header-box1">
          <div className="gradient-bg"></div>
          <div className="text-center box1-btn">
            <h3 className='h4 mb-3'>ПОЛУЧИТЬ ВТОРОЕ ЗАКЛЮЧЕНИЕ СПЕЦИАЛИСТА</h3>
            <Link to='/contact'>
              <button className='btn  btn-warning'>Check The Form</button>
            </Link>
          </div>
        </div>

        <div className="header-box2">
          <div className="conitainer-fluid">

            <h3 className='form-title'>ПОЛУЧИТЬ ВТОРОЕ ЗАКЛЮЧЕНИЕ СПЕЦИАЛИСТА</h3>
            
            <form action="#">
              <div className="row">

                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Имя</label>
                    <input type="name" className='form-control  ' />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Фамилия</label>
                    <input type="name" className='form-control' />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Электронная почта</label>
                    <input type="email" name="email" id="email" className='form-control' />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Номер телефона</label>
                    <input type="number" className='form-control'/>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Страна</label>
                    <select className="form-control" name="CountryId" id="country" required="">
                      <option value="" selected="" disabled="">Страна</option>
                      <option value="1">AFGHANISTAN</option>
                      <option value="2">ALBANIA</option>
                      <option value="3">ALGERIA</option>
                      <option value="4">AMERICAN SAMOA</option>
                      <option value="5">ANDORRA</option>
                      <option value="6">ANGOLA</option>
                      <option value="7">ANGUILLA</option>
                      <option value="8">ANTARCTICA</option>
                      <option value="9">ANTIGUA AND BARBUDA</option>
                      <option value="10">ARGENTINA</option>
                      <option value="11">ARMENIA</option>
                      <option value="12">ARUBA</option>
                      <option value="13">AUSTRALIA</option>
                      <option value="14">AUSTRIA</option>
                      <option value="15">AZERBAIJAN</option>
                      <option value="16">BAHAMAS</option>
                      <option value="17">BAHRAIN</option>
                      <option value="18">BANGLADESH</option>
                      <option value="19">BARBADOS</option>
                      <option value="20">BELARUS</option>
                      <option value="21">BELGIUM</option>
                      <option value="22">BELIZE</option>
                      <option value="23">BENIN</option>
                      <option value="24">BERMUDA</option>
                      <option value="25">BHUTAN</option>
                      <option value="26">BOLIVIA</option>
                      <option value="27">BOSNIA AND HERZEGOWINA</option>
                      <option value="28">BOTSWANA</option>
                      <option value="29">BOUVET ISLAND</option>
                      <option value="30">BRAZIL</option>
                      <option value="31">BRITISH INDIAN OCEAN TERRITORY</option>
                      <option value="32">BRUNEI DARUSSALAM</option>
                      <option value="33">BULGARIA</option>
                      <option value="34">BURKINA FASO</option>
                      <option value="35">BURUNDI</option>
                      <option value="36">CAMBODIA</option>
                      <option value="37">CAMEROON</option>
                      <option value="38">CANADA</option>
                      <option value="39">CAPE VERDE</option>
                      <option value="40">CAYMAN ISLANDS</option><option value="41">CENTRAL AFRICAN REPUBLIC</option><option value="42">CHAD</option><option value="43">CHILE</option><option value="44">CHINA</option><option value="45">CHRISTMAS ISLAND</option><option value="46">COCOS (KEELING) ISLANDS</option><option value="47">COLOMBIA</option><option value="48">COMOROS</option><option value="49">CONGO</option><option value="50">COOK ISLANDS</option><option value="51">COSTA RICA</option><option value="52">COTE D'IVOIRE</option><option value="53">CROATIA</option><option value="54">CUBA</option><option value="55">CYPRUS</option><option value="56">CZECH REPUBLIC</option><option value="57">DANMARK</option><option value="58">DJIBOUTI</option><option value="59">DOMINICA</option><option value="60">DOMINICAN REPUBLIC</option><option value="61">EAST TIMOR</option><option value="62">ECUADOR</option><option value="63">EGYPT</option><option value="64">EL SALVADOR</option><option value="65">ENGLAND</option><option value="66">EQUATORIAL GUINEA</option><option value="67">ERITREA</option><option value="68">ESTONIA</option><option value="69">ETHIOPIA</option><option value="70">FALKLAND ISLANDS (MALVINAS)</option><option value="71">FAROE ISLANDS</option><option value="72">FIJI</option><option value="74">FINLAND</option><option value="75">FRANCE</option><option value="76">FRANCE, METROPOLITAN</option><option value="77">FRENCH GUIANA</option><option value="78">FRENCH POLYNESIA</option><option value="79">FRENCH SOUTHERN TERRITORIES</option><option value="80">GABON</option><option value="81">GAMBIA</option><option value="82">GEORGIA</option><option value="83">GERMANY</option><option value="84">GHANA</option><option value="85">GIBRALTAR</option><option value="86">GREECE</option><option value="87">GREENLAND</option><option value="88">GRENADA</option><option value="89">GUADELOUPE</option><option value="90">GUAM</option><option value="91">GUATEMALA</option><option value="92">GUINEA</option><option value="93">GUINEA-BISSAU</option><option value="94">GUYANA</option><option value="95">HAITI</option><option value="96">HEARD AND MC DONALD ISLANDS</option><option value="97">HONDURAS</option><option value="98">HONG KONG</option><option value="99">HUNGARY</option><option value="100">ICELAND</option><option value="101">INDIA</option><option value="102">INDONESIA</option><option value="103">IRAN (ISLAMIC REPUBLIC OF)</option><option value="104">IRAQ</option><option value="105">IRELAND</option><option value="106">ISRAEL</option><option value="107">ITALY</option><option value="108">JAMAICA</option><option value="109">JAPAN</option><option value="110">JORDAN</option><option value="111">KAZAKHSTAN</option><option value="112">KENYA</option><option value="113">KIRIBATI</option><option value="114">KOREA, DEMOCRATIC PEOPLE'S REP</option><option value="115">KOREA, REPUBLIC OF</option><option value="250">KOSOVO</option><option value="116">KUWAIT</option><option value="117">KYRGYZSTAN</option><option value="118">KYRGYZSTAN</option><option value="119">LAO PEOPLE'S DEMOCRATIC REPUBL</option><option value="120">LATVIA</option><option value="121">LEBANON</option><option value="122">LESOTHO</option><option value="123">LETONIA</option><option value="124">LIBERIA</option><option value="125">LIBYAN ARAB JAMAHIRIYA</option><option value="126">LIECHTENSTEIN</option><option value="127">LITHUANIA</option><option value="128">LUXEMBOURG</option><option value="129">MACAU</option><option value="130">MACEDONIA, THE FORMER YUGOSLAV</option><option value="131">MADAGASCAR</option><option value="132">MALAWI</option><option value="133">MALAYSIA</option><option value="134">MALDIVES</option><option value="135">MALI</option><option value="136">MALTA</option><option value="137">MARSHALL ISLANDS</option><option value="138">MARTINIQUE</option><option value="139">MAURITANIA</option><option value="140">MAURITIUS</option><option value="141">MAYOTTE</option><option value="142">MEXICO</option><option value="143">MICRONESIA, FEDERATED STATES O</option><option value="144">MOLDOVA, REPUBLIC OF</option><option value="145">MONACO</option><option value="146">MONGOLIA</option><option value="249">MONTENEGRO</option><option value="147">MONTSERRAT</option><option value="148">MOROCCO</option><option value="149">MOZAMBIQUE</option><option value="150">MYANMAR</option><option value="151">NAMIBIA</option><option value="152">NAURU</option><option value="153">NEPAL</option><option value="154">NETHERLANDS</option><option value="155">NETHERLANDS ANTILLES</option><option value="156">NEW CALEDONIA</option><option value="157">NEW ZEALAND</option><option value="158">NICARAGUA</option><option value="159">NIGER</option><option value="160">NIGERIA</option><option value="161">NIUE</option><option value="162">NORFOLK ISLAND</option><option value="163">NORTHERN CYPRUS</option><option value="164">NORTHERN MARIANA ISLANDS</option><option value="165">NORWAY</option><option value="166">OMAN</option><option value="167">PAKISTAN</option><option value="168">PALAU</option><option value="73">PALESTINE</option><option value="169">PANAMA</option><option value="170">PAPUA NEW GUINEA</option><option value="171">PARAGUAY</option><option value="172">PERU</option><option value="173">PHILIPPINES</option><option value="174">PITCAIRN</option><option value="175">POLAND</option><option value="176">PORTUGAL</option><option value="177">PUERTO RICO</option><option value="178">QATAR</option><option value="251">REPUBLIKA SRPSKA</option><option value="179">REUNION</option><option value="180">ROMANIA</option><option value="181">RUSSIAN FEDERATION</option><option value="183">RWANDA</option><option value="184">SAINT KITTS AND NEVIS</option><option value="185">SAINT LUCIA</option><option value="186">SAINT VINCENT AND THE GRENADIN</option><option value="187">SAMOA</option><option value="188">SAN MARINO</option><option value="189">SAO TOME AND PRINCIPE</option><option value="190">SAUDI ARABIA</option><option value="191">SCODLAND</option><option value="192">SENEGAL</option><option value="193">SERBIA</option><option value="194">SEYCHELLES</option><option value="195">SIERRA LEONE</option><option value="196">SINGAPORE</option><option value="197">SLOVAKIA (SLOVAK REPUBLIC)</option><option value="198">SLOVENIA</option><option value="199">SOLOMON ISLANDS</option><option value="200">SOMALIA</option><option value="201">SOUTH AFRICA</option><option value="202">SOUTH GEORGIA AND THE SOUTH SA</option><option value="203">SPAIN</option><option value="204">SRI LANKA</option><option value="205">ST. HELENA</option><option value="206">ST. PIERRE AND MIQUELON</option><option value="207">SUDAN</option><option value="208">SURINAME</option><option value="209">SVALBARD AND JAN MAYEN ISLANDS</option><option value="210">SWAZILAND</option><option value="211">SWEDEN</option><option value="212">SWITZERLAND</option><option value="213">SYRIAN ARAB REPUBLIC</option><option value="214">TAIWAN, PROVINCE OF CHINA</option><option value="215">TAJIKISTAN</option><option value="216">TANZANIA, UNITED REPUBLIC OF</option><option value="217">THAILAND</option><option value="218">TOGO</option><option value="219">TOKELAU</option><option value="220">TONGA</option><option value="221">TRINIDAD AND TOBAGO</option><option value="222">TUNISIA</option><option value="223">TURKIYE</option><option value="224">TURKMENISTAN</option><option value="225">TURKS AND CAICOS ISLANDS</option><option value="226">TUVALU</option><option value="227">U.S.A</option><option value="228">UGANDA</option><option value="229">UKRAINE</option><option value="230">UNITED ARAB EMIRATES</option><option value="231">UNITED KINGDOM</option><option value="232">UNITED STATES MINOR OUTLYING I</option><option value="233">URUGUAY</option><option value="235">UZBEKISTAN</option><option value="236">VANUATU</option><option value="237">VATICAN CITY STATE (HOLY SEE)</option><option value="238">VENEZUELA</option><option value="239">VIET NAM</option><option value="240">VIRGIN ISLANDS (BRITISH)</option><option value="241">VIRGIN ISLANDS (U.S.)</option><option value="242">WALLES</option><option value="243">WALLIS AND FUTUNA ISLANDS</option><option value="244">WESTERN SAHARA</option><option value="245">YEMEN</option><option value="246">ZAIRE</option><option value="247">ZAMBIA</option><option value="248">ZIMBABWE</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Перечень услуг</label>
                    <select className="form-control" id="treatment_units" name="TreatmentUnitId" required=""><option value="" disabled="" selected="">Перечень услуг</option><option value="1">Медицинский осмотр</option><option value="2">Отоларингология</option><option value="3">Сердечно-сосудистая хирургия</option><option value="4">Терапевтическая онкология</option><option value="5">Стоматология</option><option value="6">Питание и диетология</option><option value="7">Педиатрия</option><option value="8">Дерматология</option><option value="9">Физиотерапия и реабилитация</option><option value="10">Общая хирургия</option><option value="11">Офтальмология</option><option value="12">Терапевтическая медицина</option><option value="13">Акушерство и гинекология</option><option value="14">Ортопедия &amp; Травматология и спортивные травмы  </option><option value="15">Неврология</option><option value="16">Нейрохирургия</option><option value="17">Радиационная онкология</option><option value="18">Эндоскопия</option><option value="19">Кардиология</option><option value="21">Радиология</option><option value="22">Урология</option><option value="23">Трансплантация органов</option><option value="24">Гематология</option><option value="25">Эстетическая, пластическая и реконструктивная хирургия</option><option value="26">Трансплантация костного мозга</option><option value="28">Life Club - Check-Up &amp; Follow-Up</option></select>
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <label>Сообщение</label>
                    <textarea name="massage" className='form-control' id="" cols="30" rows="10"></textarea>
                  </div>
                </div>

                <div className="col-md-9 mb-2">
                  <div className="form-check">
                    <input className='form-check-input' type="checkbox" name="" id="" />
                    <label className='form-check-label'>Я даю согласие Группе медицинских компаний Acıbadem на использование моих вышеупомянутых личных данных для целей, описанных в этом </label>
                  </div>
                </div>

                <div className="col-md-3">
                  <input type="submit" className='btn btn-warning btn-block' value="ОТПРАВИТЬ" />
                </div>
              
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
