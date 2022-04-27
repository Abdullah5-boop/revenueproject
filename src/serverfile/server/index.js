const express = require('express');
const mysql = require('mysql')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const e = require('express');
app.use(cors());
app.use(express.json())
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "myproject",
    connectionLimit: 10
})




app.post('/unused', (req, res) => {
    const year1 = req.body.year1;
    const year2 = req.body.year2;
    const smtr = req.body.semeter;
    console.log(year1, year2, smtr)
    if (smtr == "autumn") {

        const range1 = year2 + " " + "Spring"
        const range2 = year2 + " " + "Summer"
        console.log(range1, range2)
        const newquerry = `
        select * from (
        select  year_semester, school_title,avgenrollment,avgroomcap,difference,difference/avgroomcap*100 unused from (
        select concat(year, " ",semester)as year_semester, school_title,avgenrollment,avgroomcap,(avgroomcap-avgenrollment) as difference from ( select 
        year,semester,school_title,avg(stdcr) as avgenrollment, avg(roomcap) as avgroomcap
        from roomtbl where year <= ${year2} and year >= ${year1} group by year,semester,school_title order by year) as a) as b ) as c where year_semester not in("${range1}","${range2}") ;
    
    `
        pool.query(newquerry, (err, result) => {
            if (err) { console.log(err) }
            else {

                res.send(result)
                console.log(result)
            }
        })
    }
    else if (smtr == "spring") {

        const range1 = year1 + " " + "Autumn"
        const range2 = year2 + " " + "Summer"
        console.log(range1, range2)
        const newquerry = `
        select * from (
        select  year_semester, school_title,avgenrollment,avgroomcap,difference,difference/avgroomcap*100 unused from (
        select concat(year, " ",semester,school_title)as year_semester, school_title,avgenrollment,avgroomcap,(avgroomcap-avgenrollment) as difference from ( select 
        year,semester,school_title,avg(stdcr) as avgenrollment, avg(roomcap) as avgroomcap
        from roomtbl where year <= ${year2} and year >= ${year1} group by year,semester,school_title order by year) as a) as b ) as c where year_semester not in("${range1}","${range2}") ;
    
    `
        pool.query(newquerry, (err, result) => {
            if (err) { console.log(err) }
            else {

                res.send(result)
                console.log(result)
            }
        })
    }
    if (smtr == "summer") {

        const range1 = year1 + " " + "Autumn"
        const range2 = year1 + " " + "Summer"
        console.log(range1, range2)
        const newquerry = `
        select * from (
        select  year_semester, school_title,avgenrollment,avgroomcap,difference,difference/avgroomcap*100 unused from (
        select concat(year, " ",semester)as year_semester, school_title,avgenrollment,avgroomcap,(avgroomcap-avgenrollment) as difference from ( select 
        year,semester,school_title,avg(stdcr) as avgenrollment, avg(roomcap) as avgroomcap
        from roomtbl where year <= ${year2} and year >= ${year1} group by year,semester,school_title order by year) as a) as b ) as c where year_semester not in("${range1}","${range2}") ;
    
    `
        pool.query(newquerry, (err, result) => {
            if (err) { console.log(err) }
            else {

                res.send(result)
                console.log(result)
            }
        })
    }

})



app.post('/ClassRoom', (req, res) => {
    const Years = req.body.Year;
    const semester = req.body.Semester;
    const list = req.body.list2;
console.log(list)
    const newqurry = `
 
 
select
grd,sec,slot7,slot8,totalsec as avalable
from (
select * from (
 select grd as grd1,sec,roomsize as r1,(sec/14) as slot7,(sec/16) as slot8 from 
(select grd,sum(sec)as sec,roomsize
from ( select * from ( select roomsize, sec,
if(roomsize>=0 and roomsize<=20,"1-20",if(roomsize>=21 and roomsize<=30,"21-30",if(roomsize>=31 and roomsize<=35,"30-35",if(roomsize>=36 and roomsize<=40,"36-34",if(roomsize>=41 and roomsize<=50,"41-50",if(roomsize>=51 and roomsize<=54,"51-54",if(roomsize>=55 and roomsize<=64,"55-64",if(roomsize>=65 and roomsize<=124,"68-124",if(roomsize>=125 and roomsize<=168,"125-168",if(roomsize>=169,"170+","")))))))))) as grd
from(
select stuNO as roomsize,count(sec) as sec from sectionstbl where year=${Years} and semester="${semester}" group by stuNO ) as a) as b) as c group by grd) as d ) as e 
right outer join 
(select roomsize as r2,count(sec) totalsec, 
if(roomsize>=0 and roomsize<=20,"1-20",if(roomsize>=21 and roomsize<=30,"21-30",if(roomsize>=31 and roomsize<=35,"30-35",if(roomsize>=36 and roomsize<=40,"36-34",if(roomsize>=41 and roomsize<=50,"41-50",if(roomsize>=51 and roomsize<=54,"51-54",if(roomsize>=55 and roomsize<=64,"55-64",if(roomsize>=65 and roomsize<=124,"68-124",if(roomsize>=125 and roomsize<=168,"125-168",if(roomsize>=169,"170+","")))))))))) as grd

from sectionstbl  where year=2021 and semester="spring" group by roomsize) as y1
on y1.grd=e.grd1 ) as y2 


    `;
    pool.query(newqurry, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
            console.log(result)
        }
    })
})




app.post('/mincap', (req, res) => {
    const minyear1 = req.body.year1;
    const minyear2 = req.body.year2;
    const minsmtr = req.body.semeter;
    const minmin = req.body.min;
    console.log(minyear1, minyear2, minsmtr, minmin)

    if (minsmtr === "autumn") {
        const range1 = minyear2 + " " + "Summer";
        const range2 = minyear2 + " " + "Autumn";
        const querry = `

select * from (
    select concat(year," ",semester) as smstrandyr ,SLASS,SETS,SBE,SELS from (
    select year,semester, sum(SLASS) as SLASS, sum(SETS) as SETS, sum(SBE) as SBE, sum(SELS) as SELS  from (
    select year,semester,
    if(SCHOOL_TITLE="SETS",stuNo,0) as SETS, 
    if(SCHOOL_TITLE="Slass",stuNo,0) as SLASS, 
    if(SCHOOL_TITLE="SBE",stuNo,0) as SBE, 
    if(SCHOOL_TITLE="SELS",stuNo,0) as SELS 
    from (
    select * from (select r.year, r.courseid,r.school_title,r.semester,stuno from sectionstbl as s INNER join roomtbl as r on r.semester=s.semester and r.year=s.year and r.courseid = s.courseid and r.sec=s.sec) as a where stuNo< ${minmin} group by year,semester,School_title order by stuno) as b order by year) as c where year BETWEEN "${minyear1}" and "${minyear2}" group by year,semester order by year,semester) as d ) as e where smstrandyr not in("${range1}","${range2}");
        
        `
        pool.query(querry, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(result)
                res.send(result);
            }
        })
    }
     if (minsmtr === "spring") {
        const range1 = minyear1 + " " + "Autumn";
        const range2 = minyear2 + " " + "Summer";
        const querry = `

        select * from (
            select concat(year," ",semester) as smstrandyr ,SLASS,SETS,SBE,SELS from (
            select year,semester, sum(SLASS) as SLASS, sum(SETS) as SETS, sum(SBE) as SBE, sum(SELS) as SELS  from (
            select year,semester,
            if(SCHOOL_TITLE="SETS",stuNo,0) as SETS, 
            if(SCHOOL_TITLE="Slass",stuNo,0) as SLASS, 
            if(SCHOOL_TITLE="SBE",stuNo,0) as SBE, 
            if(SCHOOL_TITLE="SELS",stuNo,0) as SELS 
            from (
            select * from (select r.year, r.courseid,r.school_title,r.semester,stuno from sectionstbl as s INNER join roomtbl as r on r.semester=s.semester and r.year=s.year and r.courseid = s.courseid and r.sec=s.sec) as a where stuNo<c ${minmin} group by year,semester,School_title order by stuno) as b order by year) as c where year BETWEEN ${minyear1} and ${minyear2} group by year,semester order by year,semester) as d ) as e where smstrandyr not in("${range1}","${range2}");
                
                `
        pool.query(querry, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(result)
                res.send(result);
            }
        })
    }
    if (minsmtr === "summer") {
        const range1 = minyear1 + " " + "Autumn";
        const range2 = minyear1 + " " + "Spring";
        const querry = `

        select * from (
            select concat(year," ",semester) as smstrandyr ,SLASS,SETS,SBE,SELS from (
            select year,semester, sum(SLASS) as SLASS, sum(SETS) as SETS, sum(SBE) as SBE, sum(SELS) as SELS  from (
            select year,semester,
            if(SCHOOL_TITLE="SETS",stuNo,0) as SETS, 
            if(SCHOOL_TITLE="Slass",stuNo,0) as SLASS, 
            if(SCHOOL_TITLE="SBE",stuNo,0) as SBE, 
            if(SCHOOL_TITLE="SELS",stuNo,0) as SELS 
            from (
            select * from (select r.year, r.courseid,r.school_title,r.semester,stuno from sectionstbl as s INNER join roomtbl as r on r.semester=s.semester and r.year=s.year and r.courseid = s.courseid and r.sec=s.sec) as a where stuNo<${minmin} group by year,semester,School_title order by stuno) as b order by year) as c where year BETWEEN ${minyear1} and ${minyear2} group by year,semester order by year,semester) as d ) as e where smstrandyr not in("${range1}","${range2}");
                
                `
        pool.query(querry, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(result)
                res.send(result);
            }
        })
    }



    else {
        const querry = ` 
    select year,semester, sum(SLASS) as SLASS, sum(SETS) as SETS, sum(SBE) as SBE, sum(SELS) as SELS  from (
        select year,semester,
        if(SCHOOL_TITLE="SETS",stuNo,0) as SETS, 
        if(SCHOOL_TITLE="Slass",stuNo,0) as SLASS, 
        if(SCHOOL_TITLE="SBE",stuNo,0) as SBE, 
        if(SCHOOL_TITLE="SELS",stuNo,0) as SELS 
        from (
        select * from (select r.year, r.courseid,r.school_title,r.semester,stuno from sectionstbl as s INNER join roomtbl as r on r.semester=s.semester and r.year=s.year and r.courseid = s.courseid and r.sec=s.sec) as a where stuNo<${minmin} group by year,semester,School_title order by stuno) as b order by year) as c group by year,semester;

    `
        pool.query(querry, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(result)
                res.send(result);
            }
        })
    }

})

app.post('/input1', (req, res) => {
    const year1 = req.body.Year1;
    const year2 = req.body.Year2;
    const semester = req.body.semster;
    const school = req.body.school;
        const range1 = year2 + " " + "Summer";
    const range2 = year2 + " " + "Autumn";
    console.log(year1,year2,semester,school)
    let newq;
    if (semester == 'spring') {
        
        newq = `
        select * from (
            select concat(year," ",semester) semesyr,revenue from (
            select year,semester,sum(revenue) as revenue from (select year,semester,courseid,(stdpercrs*crs) as revenue from (
            select year,semester,courseid, sum(stuno) stdpercrs ,count(sec), crs  from coursestbl where school_title ="${school}" group by year,semester,courseid) as a) b group by year,semester) as c where year>=${year1} and year<=${year2} ) as d where semesyr not in("${range1}","${range2}");
    `
        pool.query(newq, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(result)
                res.send(result)
            }
        })
    }
    else {
        newq = `
    select concat(year," ",semester) semesyr,revenue from (
        select year,semester,sum(revenue) as revenue from (select year,semester,courseid,(stdpercrs*crs) as revenue from (
        select year,semester,courseid, sum(stuno) stdpercrs ,count(sec), crs  from coursestbl where school_title ="${school}" group by year,semester,courseid) as a) b group by year,semester) as c where year>=${year1} and year<=${year2};    
   `
        pool.query(newq, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(result)
                res.send(result)
            }
        })


    }

    // pool.query(newq, (err, result) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     else {
    //         console.log(result)
    //         res.send(result)
    //     }
    // })
   

})



app.get('/Table1', (req, res) => {
    pool.query(`


    select year,semester, smtryr,totalSBE,totalsalss,totalSELS, totalsets,totalSPPH,(totalsets+totalSBE+totalsalss+totalSELS+totalSPPH) as total from(
        select year,semester,smtryr,sum(SBE) totalSBE, sum(salss) as totalsalss,sum(SELS) as totalSELS,SUM(SETS) AS totalsets,sum(SPPH) as totalSPPH from (
        select YEAR, semester, concat (year," ",semester) as smtryr,SCHOOL_TITLE,
        if (SCHOOL_TITLE="SLASS" , SUM(stuNO*CRS) , 0) as SALSS,
        if (SCHOOL_TITLE="SELS" , SUM(stuNO*CRS) , 0) as SELS,
        if (SCHOOL_TITLE="SETS" , SUM(stuNO*CRS) , 0) as SETS,
        if (SCHOOL_TITLE="SPPH" , SUM(stuNO*CRS) , 0) as SPPH,
        if (SCHOOL_TITLE="SBE" , SUM(stuNO*CRS) , 0) as SBE
         from coursestbl where SCHOOL_TITLE="Slass" or SCHOOL_TITLE="sbe" OR SCHOOL_TITLE="SPPH" or SCHOOL_TITLE= "SELS" OR SCHOOL_TITLE="sets" group by year,semester,dept order by year,semester) as t group by smtryr) as a     
    
    
    `, (err, result) => {
        if (err) { console.log(err) }
        else {

            console.log(result)
            res.send(result)
        }
    })

})



app.listen(port, () => {
    console.log("Listing port ", port)
})