import dayjs from 'dayjs'

export const daytimeAgoConverter = (daytime : string) =>{
    const daytime_dayjs = dayjs(daytime)
    const daytime_now = dayjs()

    const diff = daytime_now.diff(daytime_dayjs)
    if(diff < 60){
        return `${diff}秒前`
    }
    if(diff < 60 * 60){
        return `${diff % 60}分前`
    }
    if(diff < 60 * 60 * 24){
        return `${diff % (60 * 60)}時間前`
    }

    if(diff > 31536000) { // 1年前以上
        return `${daytime_dayjs.format("YYYY年MM月DD日")}`
    }

    return `${daytime_dayjs.format("MM月DD日")}`
}