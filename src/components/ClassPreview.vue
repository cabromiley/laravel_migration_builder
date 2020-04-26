<template>
    <pre lang="php">
        &lt;?php

        use Illuminate\Database\Migrations\Migration;
        use Illuminate\Database\Schema\Blueprint;
        use Illuminate\Support\Facades\Schema;

        class {{this.$store.state.className}} extends Migration
        {
            /**
            * Run the migrations.
            *
            * @return void
            */
            public function up()
            {
                Schema::create('{{ this.$store.state.tableName }}', function (Blueprint $table) {
                    {{ columns }}
                    {{ $store.state.timestamps ? '$table->timestamps();' : '' }}
                });
            }

            /**
            * Reverse the migrations.
            *
            * @return void
            */
            public function down()
            {
                Schema::drop('{{ this.$store.state.tableName }}');
            }
        }

    </pre>
</template>

<script>
export default {
    name: "ClassPreview",
    computed: {
        columns() {
            const columns = this.$store.state.columns;

            return columns.map((c) => `$table->${c.type ? c.type.toLowerCase() : ''}('${c.name}');`).join('\r\n                ');
        }
    }
}
</script>